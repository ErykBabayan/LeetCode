function isPalindrome(x: number): boolean {
    const value:string = x.toString()
    const reversedValue = value.split("").reverse().join("")
    
    return reversedValue === value ? true : false
};