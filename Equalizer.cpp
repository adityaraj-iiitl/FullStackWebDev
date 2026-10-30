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
        int n;
        cin>>n;
        vector<int> a(n);
        for(int j=0;j<n;j++)
        cin>>a[j];

        int l=-1;
        int r=-1;
        for(int j=n-1;j>0;j--)
        {
            if(a[j]==(a[j-1]+1))
            {
                r=j-1;
                break;
            }
        }
        for(int j=0;j<(n-1);j++)
        {
            if(a[j+1]==(a[j]-1))
            {
                l=j+1;
                break;
            }
        }
        if(l==-1 && r==-1)
        {
            int ans=0;
            for(int j=0;j<(n-1);j++)
            {
                if(a[j]==(a[j+1]))
                {
                    ans++;
                }
            }
            cout<<ans<<endl;
        }else if(l==-1)
        {
            for(int j=0;j<=r;j++)
            {
                a[j]++;
            }
             int ans=0;
            for(int j=0;j<(n-1);j++)
            {
                if(a[j]==(a[j+1]))
                {
                    ans++;
                }
            }
            cout<<ans<<endl;
        }else if(r==-1)
        {
            for(int j=l;j<n;j++)
            a[j]++;
            
             int ans=0;
            for(int j=0;j<(n-1);j++)
            {
                if(a[j]==(a[j+1]))
                {
                    ans++;
                }
            }
            cout<<ans<<endl;
        }else
        {
            for(int j=l;j<=r;j++)
            {
                a[j]++;
            }
             int ans=0;
            for(int j=0;j<(n-1);j++)
            {
                if(a[j]==(a[j+1]))
                {
                    ans++;
                }
            }
            cout<<ans<<endl;
        }
    }

    return 0;
}