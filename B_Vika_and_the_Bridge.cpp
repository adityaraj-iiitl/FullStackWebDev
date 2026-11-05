#include <bits/stdc++.h>
using namespace std;

#define int long long

int32_t main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--)
    {
        int n,k;
        cin>>n>>k;
        vector<int> a(n);
        for(int j=0;j<n;j++)
        cin>>a[j];

        map<int,int> mp;
        vector<vector<int>> list(k);
        for(int j=0;j<n;j++)
        {
            if(mp[a[j]]==0)
            {
                mp[a[j]]=j+1;
                list[a[j]-1].push_back(j);
            }else
            {
                int diff=j+1-mp[a[j]]-1;
                mp[a[j]]=j+1;
                list[a[j]-1].push_back(diff);
            }
        }
        for(int j=0;j<k;j++)
        {
           int num=mp[j+1];
           list[j].push_back(n-(num));
        }
        for(int j=0;j<k;j++)
        {
            sort(list[j].begin(),list[j].end(),greater<int>());
        }
        
        sort(list.begin(),list.end());
      
        if(list[0].size()==1)
        {
            int ans=list[0][0]/2;
            
            cout<<ans<<endl;
        }else
        {
           int ans=INT_MAX;
           for(int j=0;j<k;j++)
           {
            int num1=list[j][0];
            num1/=2;
            num1=max(num1,list[j][1]);
            ans=min(ans,num1);
           }
            cout<<ans<<endl;
        }
    }

    return 0;
}