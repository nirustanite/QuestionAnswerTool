function compare(a,b){
   return a.question.toLowerCase() > b.question.toLowerCase() ? 1 : -1;
}

export default compare;