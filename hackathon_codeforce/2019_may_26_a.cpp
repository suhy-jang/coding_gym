#include <iostream>
#include <string>
using namespace std;

int DoTheyMeet(int station, int a, int x, int b, int y) {
  if(a==b) return 0;
  int first, second;
  first=a;
  second=b;
  int r=-1;
  while(first!=x && second!=y){
    if(first==station){
      first=1;
    } else {
      first++;
    }
    if(second==1){
      second = station;
    } else {
      second--;
    }
    if(first==second) {
      r=0;
    }
  }
  return r;
}

int main() {
  int station_num, a,x,b,y;
  cin >> station_num >> a >> x >> b >> y;
  string say="";
  if(0==DoTheyMeet(station_num,a,x,b,y)) {
    say="YES";
  } else {
    say= "NO";
  }
  cout<<say;
  return 0;
}
