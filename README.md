npm audit fix --force  
 
 git init

git add .

git commit -m "1-import"

git branch -M 1-import

git branch

git remote add origin https://github.com/VIKASJI593/REACT-TUTORIAL.git


git remote set-url origin https://github.com/VIKASJI593/REACT-TUTORIAL.git

git remote -v

git push -u origin 1-import

git push -f -u origin 1-import


//const Header = () => <h1>Header</h1>

//const Header = (a,b) => a+b;




//imporet header
import Header from "./Header";

{/* use header */}
    <Header/>
    