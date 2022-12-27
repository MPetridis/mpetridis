const express = require("express");
const fs = require("fs");
var ejsLayouts = require("express-ejs-layouts");
const path = require("path");
const http = require("http");
const app = express();

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(ejsLayouts);

app.get("/", (req, res) => {
  res.render("hello", {
    menu: "",
  });
});




app.get("/biography", (req, res) => {
  var biography = [
        {
          title : 'life',
          body : 'Ο Μαρκ Μάνσον μεγάλωσε στο Ώστιν των Ηνωμένων Πολιτειών της Αμερικής.Μετακινήθηκε λόγο σπουδών στη Βοστώνη και αποφοίτησε το 2007. Το 2016 παντρεύτηκε την Fernanda Neute.'
        },
        {
          title : 'Blogs',
          body : 'Ξεκίνησε το πρώτο του blog το 2008, με θέμα συμβουλές γνωριμιών Το 2010, ξεκίνησε ένα νέο blog με όνομα Post Masculine το οποίο παρείχε γενικές συμβουλές ζωής για άνδρες. Ύστερα μετέφερε το blog του στο https://markmanson.net/το 2013. Το 2015, δημοσίευσε ένα άρθρο \"The Subtle Art Of Not Giving a F*ck\", το οποίο αποτέλεσε τα θεμέλια του δεύτερου βιβλίου του.'
        },
        {
          title : 'Ιστορικό εκδόσεων',
          body : 'Το πρώτο βιβλίο του, Models:Attract Women Through Honesty , δημοσιεύτηκε από τον ίδιο το 2011. Το δεύτερο βιβλίο του \"The Subtle Art Of Not Giving a F*ck\", δημοσιεύτηκε το 2016 και εμφανίστηκε στη έκτη θέση των New York Times Bestsellers List στην κατηγορία How-to και Miscellaneous την εβδομάδα της 2(δευτέρας) Οκτωβρίου του 2016 και ανυψώθηκε νούμερο ένα θέση στη λίστα, την εβδομάδα της 16( δεκάτης έκτης) Ιουλίου του 2017. Από τον Μάϊο του 2020 , το βιβλίο έχει παραμείνει 179 εβδομάδες στα 10 κορυφαία και έχει πουλήσει πάνω από 12 εκατομμύρια αντίτυπα .Το βιβλίο έχει μεταφραστεί σε πάνω από 30 γλώσσες συμπεριλαμβανομένου και στα Ελληνικά. Το τρίτο βιβλίο του Μάνσον \"Everything is F*cked: A Book About Hope\" δημοσιεύτηκε από την HarperCollins το 2019. Έκανε το ντεμπούτο του στην νούμερο ένα θέση των New York Times Bestsellers List for Advice, How-to και Miscellaneous. Τον Οκτώβριο του 2018, το Penguin Random House ανακοίνωσε ότι ο Μαρκ Μάνσον θα συνεργαζόταν με τον Γουίλ Σμιθ για να γράψει την αυτοβιογραφία του ηθοποιού. Τον Δεκέμβριο του 2020, κυκλοφόρησε ένα ακουστικό βιβλίο με όνομα \"Love Is Not Enough\" ως έναν αποκλειστικό ακουστικό πρωτότυπο.'
        }
     ];
  
     
  res.render("biography", {
    menu:biography,
  });
});
app.get("/photos", (req, res) => {
  res.render("photos", {
    str: "",
  });
});
app.get("/work", (req, res) => {
  res.render("work", {
    str: "",
  });
});
app.get("/links", (req, res) => {
  res.render("links", {
    str: "",
  });
});

app.listen(3000);
