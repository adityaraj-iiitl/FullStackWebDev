#include <bits/stdc++.h>
using namespace std;

#define int long long
void choose(vector<int>& a,int& k,int n,vector<int>& seqs,int sum)
{
    if(n==0)
    {
        return;
    }
    if((sum+a[n-1])==k)
    {
       seqs.push_back(answ);
    }
}
int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

     int n,k;
     cin>>n>>k;
     vector<int> a(n);
     for(int j=0;j<n;j++)
     cin>>a[j];

     vector<vector<int>> seqs;
     choose(a,n,seqs,0);
    return 0;
}