function mostWordsFound(sentences: string[]): number {
    let wordCount = 0
for(let words of sentences){
    if(words.split(" ").length > wordCount){
        wordCount = words.split(" ").length
    }
}
    
return wordCount;
};