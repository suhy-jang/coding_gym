class Solution {
public:
    unordered_map<char, char> match = {{')', '('}, {'}', '{'}, {']', '['}};
    bool isValid(string s) {
        bool valid = true;
        stack<char> save;
        for(char c : s) {
            switch(c) {
                case '(':
                case '{':
                case '[':
                    save.push(c);
                    break;
                default:
                    if(save.size() && save.top() == match[c]) {
                        save.pop();
                    } else {
                        valid = false;
                    }
            }
        }
        return save.empty() ? valid : false;
    }
};
