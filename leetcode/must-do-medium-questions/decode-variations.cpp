#import <iostream>
#import <string>
#import <vector>

using namespace std;

int decodeVariations(const string& S)
{
  int n = S.length();
  vector<int> dp(n+1, 0);
  dp[n] = 1;
  for (int i = n-1; i >= 0; i--) {
    if (S[i] == '0') {
      dp[i] = 0;
    } else if (S[i] == '1') {
      dp[i] = dp[i+1] + dp[i+2];
    } else if (S[i] == '2') {
      dp[i] = dp[i+1];
      if (i+1 < n && S[i+1] <= '6') {
        dp[i] += dp[i+2];
      }
    } else {
      dp[i] = dp[i+1];
    }
  }
  return dp[0];
}

int main() 
{
  return decodeVariations("1262");
}

