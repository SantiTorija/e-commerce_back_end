const formidable = require("formidable");
const { User, Tweet } = require("../models");

module.exports = {
  show: async function (req, res) {
    const user = await User.findOne({ username: req.params.username })
      .populate("followers")
      .populate("following");
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    const page = req.query.page || 1;
    const pagesCount = Math.ceil(
      (await Tweet.find({ _id: { $in: user.tweets } }).countDocuments()) / 10,
    );
    if (page > pagesCount) {
      return res.status(400).json({ error: "Invalid request, no more pages" });
    }
    const tweets = await Tweet.find({ _id: { $in: user.tweets } })
      .populate("author")
      .sort({ createdAt: "desc" })
      .skip(10 * (page - 1))
      .limit(20);
    const data = tweets.map((tweet) => {
      return {
        ...tweet._doc,
        liked: tweet.likes.some((like) => like.equals(req.auth.id)),
      };
    });
    res.json({ tweets: data, userProfile: user, pagesCount: pagesCount });
  },
  update: async function (req, res) {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: err });
      }

      const newInfo = {
        firstname: fields.firstname,
        lastname: fields.lastname,
        bio: fields.bio,
      };

      if (files.avatar) {
        newInfo.avatar = files.avatar.newFilename;
      }
      if (files.banner) {
        newInfo.banner = files.banner.newFilename;
      }
      const user = await User.findByIdAndUpdate(req.params.id, newInfo);
      res.json();
    });
  },
  usersToFollow: async function (req, res) {
    const user = await User.findById(req.auth.id);
    const followingAndMe = [...user.following, user._id];
    const usersToFollow = await User.find({ _id: { $nin: followingAndMe } }).limit(3);
    return res.json(usersToFollow);
  },
  follow: async function (req, res) {
    const user = await User.findById(req.auth.id);
    if (user.following.includes(req.params.id)) {
      res.status(400); // No es este codigo
      return res.send("The logged user is already following this user");
    }
    await User.findByIdAndUpdate(req.auth.id, { $push: { following: req.params.id } });
    await User.findByIdAndUpdate(req.params.id, { $push: { followers: req.auth.id } });
    res.json();
  },
  unfollow: async function (req, res) {
    const user = await User.findById(req.auth.id);
    if (!user.following.includes(req.params.id)) {
      res.status(400); // No es este codigo
      return res.send("The logged user is not following this user");
    }
    await User.findByIdAndUpdate(req.auth.id, { $pull: { following: req.params.id } });
    await User.findByIdAndUpdate(req.params.id, { $pull: { followers: req.auth.id } });
    res.json();
  },
};
