#include <iostream>
#include <vector>
using namespace std;

int get_overflow(vector<int>& arr, int start, int end, int next) {
  if(start + next >= end) {
    return 0;
  }
  int num = 0;
  for(int i = start; i <= end; i += next*2){
    int curr = arr[i] + arr[i + next];
    if(curr >= 10){
      num += 1;
      curr %= 10;
    }
    arr[i] = curr;
  }
  return num + get_overflow(arr, start, end, next*2);
}

vector<int> copy(vector<int> array) {
  vector<int> new_array(array);
  return new_array;
}

int main() {
  int arr_num;
  cin >> arr_num;
  cin.ignore();
  vector<int> arr(arr_num);
  for(int i=0;i<arr_num;i++) {
    cin >> arr[i];
  }
  cin.ignore();

  int quiry_num;
  cin >> quiry_num;
  cin.ignore();
  vector<int> overflows(quiry_num);
  for(int i=0;i<quiry_num;i++) {
    int start, end;
    cin >> start >> end;
    cin.ignore();
    vector<int> new_array = copy(arr);
    overflows[i] = get_overflow(new_array, start, end, 1);
  }

  for(int i=0;i<quiry_num;i++) {
    cout << overflows[i] << "\n";
  }
  return 0;
}
