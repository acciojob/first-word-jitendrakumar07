function firstWord(s) {
  // your code here
	 s = s.trimStart();
  

  const spaceIndex = s.indexOf(" ");
  
   return spaceIndex === -1 ? s : s.substring(0, spaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
