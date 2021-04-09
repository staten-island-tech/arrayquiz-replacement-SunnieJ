const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent
const OldtoYoung = books.sort((a, b) => {
  return a.publishDate - b.publishDate;
});
console.log(OldtoYoung);

//sort books alphabetically
const Alpha = books.sort((a, b) => {
  let fa = a.name.toLowerCase();
  let fb = b.name.toLowerCase(); //changes to lowercase, makes it case insensitive
  return fa < fb ? -1 : fa > fb ? 1 : 0; //puts in alphabetical
});
console.log(Alpha);

//Find who wrote War and Peace
const WnPAuthor = books.find((books) => {
  if (books.name === "War and Peace")
    return books.authorFirst + books.authorLast;
});
console.log(WnPAuthor);

//how many books were written before 1900?
const LessThan = books.filter((books) => books.publishDate < 1900);
const Before1900 = Object.keys(LessThan).length;
console.log(Before1900);

//was there at least one book published within the last 100 years?
const within100 = books.filter((books) => books.publishDate > 1921);
console.log(within100);

//was every book published within the last 100 years?
if (books[0].publishDate > 1921) {
  console.log("Yes, every book was published whthin the last 100 years.");
} else {
  console.log("No, not every book was published within the last 100 years.");
}
