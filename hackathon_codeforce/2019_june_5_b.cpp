#include <iostream>
#include <limits>
#include <string>
#include <sstream>
#include <stack>
#include <vector>
using namespace std;

int CatchOverflow(int base, int multi_f) {
  int int_max = std::numeric_limits<int>::max();
  if(base >= (float)int_max / multi_f){
    return -1;
  }
  return 0;
}

int CommandProcess(string command, int num, int& stackedNum, stack<int>& st) {
  int result = 0;
  if(command == "add"){
    result = (stackedNum > 1)? stackedNum : 1;
  } else if(command == "for"){
    if(-1 == CatchOverflow(stackedNum, num)){
      stackedNum = 0;
      result = -1;
    }
    stackedNum *= num;
    st.push(num);
  } else if(command == "end"){
    if(!st.empty()){
      stackedNum /= st.top();
      st.pop();
    }
  }
  return result;
}

int main() {
  int bOverflow = 0;
  int result = 0;
  int nQuery;
  string strQ;
  vector<int> vR;
  int stackedNum = 1;
  stack<int> st;

  cin >> nQuery;
  cin.ignore();

  while(nQuery--){
    getline(cin,strQ);
    stringstream ss(strQ);
    string command;
    int num=0;

    while(ss >> command) {
      if (command == "for"){
        ss >> num;
      }
      int temp = CommandProcess(command, num, stackedNum, st);
      if(temp == -1) {
        bOverflow = -1;
      }
      result += temp;
    }
  }
  while(!st.empty()){
    st.pop();
  }
  if(bOverflow == 0){
    cout << result;
  } else {
    cout << "OVERFLOW!!!";
  }
  return 0;
}
