import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let blogPosts = [{postTitle: "First post", postBody: "This is a test blog post"},
  {postTitle: "second post", postBody: "This is a test blog post #2"}];

function addPost(title, newPost){
  blogPosts.push({postTitle: title, postBody: newPost});
}

app.get("/", (req, res) => {
  res.render("index.ejs", {blogPosts});
});

/*
relevant paths:
1.all posts titles are paths - will direct to a page that renders from blogPosts
2./viewPost
2./newEntry - will direct to the new post page
3./post will post from the newEntry page
4./delete will delete from every blog page
5./edit will send to newEntry page to edit the text

next task:
make button render the viewpost page with the relevant post


*/





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });