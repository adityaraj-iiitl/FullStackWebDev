#include <bits/stdc++.h>
using namespace std;

#define int long long
int choose(vector<int>& a,int& med,int ind,int lst,int& n,vector<vector<int>>& dp)
{
    if(ind==n)
    {
        return 0;
    }
    if(dp[ind][lst]!=-1)
    return dp[ind][lst];

   
    if((ind-lst)&1)
    {
        return choose(a,med,ind+1,lst,n,dp);
    }
     vector<int> b;
    for(int j=lst;j<=ind;j++)
    {
        b.push_back(a[j]);
    }
    sort(b.begin(),b.end());
    int num=b.size();
    int med2=b[num/2];
    if(med2==med)
    {
       return dp[ind][lst]=max(1+choose(a,med,ind+1,ind+1,n,dp),choose(a,med,ind+1,lst,n,dp));
    }else
    {
        return dp[ind][lst]=choose(a,med,ind+1,lst,n,dp);
    }
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
        for(int j=0;j<n;j++)
        cin>>a[j];

        int med;
       
        vector<int> c=a;
        sort(c.begin(),c.end());
        med=c[n/2];
        vector<vector<int>> dp(n+1,vector<int>(n+1,-1));
        int ans=choose(a,med,0,0,n,dp);
        cout<<ans<<endl;
    }

    return 0;
}