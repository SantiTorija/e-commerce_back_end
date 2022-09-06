const { User, Tweet } = require("../models");

module.exports = {
  index: async function (req, res) {
    const { following } = await User.findById(req.auth.id, "following");
    const page = req.query.page || 1;
    const pagesCount = Math.ceil(
      (await Tweet.find({ author: { $in: following } }).countDocuments()) / 10,
    );
    if (page > pagesCount) {
      return res.status(400).json({ error: "Invalid request, no more pages" });
    }
    const tweets = await Tweet.find({ author: { $in: following } })
      .populate("author")
      .sort({ createdAt: "desc" })
      .skip(10 * (page - 1))
      .limit(10);
    const data = tweets.map((tweet) => {
      return {
        ...tweet._doc,
        liked: tweet.likes.some((like) => like.equals(req.auth.id)),
      };
    });
    return res.json({ tweets: data, pagesCount: pagesCount });
  },
  store: async function (req, res) {
    const tweet = await Tweet.create({
      content: req.body.tweetContent,
      author: req.auth.id,
      createdAt: Date.now(),
      likes: [],
    });
    await User.findByIdAndUpdate(req.auth.id, { $push: { tweets: tweet } });

    res.json(tweet);
  },
  destroy: async function (req, res) {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet.author._id.equals(req.auth.id)) {
      return res.status(401).send("User is not allowed to delete this tweet");
    }
    const deletedTweet = await Tweet.deleteOne({ _id: req.params.id });
    res.json(deletedTweet);
  },
  like: async function (req, res) {
    const tweet = await Tweet.findById(req.params.id);
    console.log(tweet);
    if (tweet.likes.includes(req.auth.id)) {
      await Tweet.findByIdAndUpdate(req.params.id, { $pull: { likes: req.auth.id } });
      return res.json({ liked: false });
    }
    await Tweet.findByIdAndUpdate(req.params.id, { $push: { likes: req.auth.id } });
    res.json({ liked: true });
  },
};
