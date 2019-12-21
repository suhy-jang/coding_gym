class Solution {
public:
    unordered_map<int, string> phone = {{'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"}, {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}}; 
    vector<string> output;
    
    void backtrack(string combination, string nextDigits) {
        if (nextDigits.length() == 0) {
            output.push_back(combination);
        } else {
            char digit = nextDigits[0];
            for (int i = 0; i < phone[digit].length(); i++) {
                backtrack(combination + phone[digit][i], nextDigits.substr(1));
            }
        }
    }
    
    vector<string> letterCombinations(string digits) {
        if (digits.length() != 0) {
            backtrack("", digits);
        }
        return output;
    }
};
