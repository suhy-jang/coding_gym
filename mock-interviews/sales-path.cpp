#include <iostream>
#include <vector>

using namespace std;

struct Node
{
  int cost;
  vector<Node *> children;
  Node *parent;
};
//0-> child -> return min(cost+pre, 
/*
      6
    1   5
*/
int getCheapestCost( Node *rootNode )
{
  if(rootNode->children.empty()){
    return rootNode->cost;
  }
  int cur_min=MAX_INT; //initial value

  for(int i=0; i<rootNode->children.size(); i++){
   cur_min =  min(getCheapestCost(rootNode->children[i]), cur_min);
  }
  return rootNode->cost + cur_min;
}

int main() {
  return 0;
}
