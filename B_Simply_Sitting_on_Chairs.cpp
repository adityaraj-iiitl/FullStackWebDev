#include <bits/stdc++.h>
using namespace std;

#define int long long
vector<vector<int>> dp;

int choose(vector<int>& a,int n,int ind,int mini)
{
    if(ind>=mini)
    return 0;

    if(ind>=n)
    return 0;

    if(dp[ind][mini]!=-1)
    return dp[ind][mini];
    int mini2=min(mini,a[ind]-1);

    return dp[ind][mini]=max(1+choose(a,n,ind+1,mini2),choose(a,n,ind+1,mini));
    

}
int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--)
    {
       int n;
       cin>>n;
       vector<int> a(n);
       int maxi=INT_MIN;
       for(int j=0;j<n;j++)
       {
        cin>>a[j];
        maxi=max(a[j],maxi);
       } 
       dp.assign(n+1,vector<int>(maxi+1,-1));
      
       int num=maxi;
       int ans=choose(a,n,0,num);
       cout<<ans<<endl;
       dp.clear();
    }

    return 0;
}