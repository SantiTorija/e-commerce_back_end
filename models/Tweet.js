const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const datefns = require("date-fns");

const tweetSchema = new Schema({
  content: {
    type: String,
    rquired: "Content is required",
    maxLength: 140,
    trim: true,
  },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: {
    type: Date,
    required: true,
  },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

tweetSchema.virtual("timeAgo").get(function () {
  let date = datefns.format(this.createdAt, "LLL d, y");
  const now = new Date();

  // En el ultimo dia
  if (datefns.isWithinInterval(this.createdAt, { start: datefns.subDays(now, 1), end: now })) {
    date = datefns.formatDistanceToNowStrict(this.createdAt, { addSuffix: true });
  }
  // En este anio
  else if (this.createdAt.getFullYear() === now.getFullYear()) {
    date = datefns.format(this.createdAt, "LLL d");
  }
  return date;
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
