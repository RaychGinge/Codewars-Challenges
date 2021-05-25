// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {

    // if the string ends with the same letters in the ending string, return true, if not, return false
    if (str.endsWith(ending)) {
        return true;
    } else {
        return false;
    };
};