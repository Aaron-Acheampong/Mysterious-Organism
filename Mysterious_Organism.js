// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
  return {specimenNum: number,
  dna: array,

  mutate() {
    let baseIndex = Math.floor(Math.random() * this.dna.length);

    if(this.dna[baseIndex] === 'A'){
      let lst = ['T', 'C', 'G']
      this.dna[baseIndex] = lst[Math.floor(Math.random() * 3)];
    }
     else if(this.dna[baseIndex] === 'T'){
      let lst = ['A', 'C', 'G']
      this.dna[baseIndex] = lst[Math.floor(Math.random() * 3)];
    }
     else if(this.dna[baseIndex] === 'C'){
      let lst = ['A', 'T', 'G']
      this.dna[baseIndex] = lst[Math.floor(Math.random() * 3)];
    }
    else if(this.dna[baseIndex] === 'G'){
      let lst = ['A', 'T', 'C']
      this.dna[baseIndex] = lst[Math.floor(Math.random() * 3)];
    }
  },

  compareDNA(pAequor) {
    let count = 0;
    for(let i = 0; i < 15; i++){
      if (this.dna[i] === pAequor.dna[i]){
        count += 1;
      }
    }
    const percent = (count/15) * 100;

    console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percent}% DNA in common`);
  },

  willLikelySurvive() {
    let count = 0;
    for(let i = 0; i < 15; i++) {
      if ((this.dna[i] === 'C') || (this.dna[i] === 'G') ) {
        count += 1;
      }
    }

    const percent = (count / 15) * 100;

    if (percent > 60) { return true; }
    else { return false; }
  },

  };


}


let sample = [];
let i = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    sample.push(temp);
    i += 1
  } 
}








