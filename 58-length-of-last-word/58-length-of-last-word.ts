function lengthOfLastWord(s: string): number {
    const splittedString = s.trim().split(" ")
    return splittedString[splittedString.length-1].length
};