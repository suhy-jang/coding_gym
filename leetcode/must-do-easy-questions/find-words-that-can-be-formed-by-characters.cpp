// compare hashmap
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int count = 0;
        unordered_map<char, int> hash;
        for(char c : chars) {
            hash[c] += 1;
        }
        for(string word : words) {
            bool included = true;
            unordered_map<char, int> temp = hash;
            for(char c : word) {
                temp[c] -= 1;
                if (temp[c] < 0) {
                    included = false;
                    break;
                }
            }
            if (included) {
                count += word.length();
            }
        }
        return count;
    }
};

// using stl
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int sum = 0;
        for(const auto & w : words) {
            bool flag = true;
            for(const auto & c : w) {
                if (count(w.begin(), w.end(), c) > count(chars.begin(), chars.end(), c)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                sum += w.length();
            }
        }
        return sum;
    }
};
