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
        int od=0;
        int ev=0;
        for(int j=0;j<n;j++)
        {
            cin>>a[j];
            if(a[j]&1)
            od++;
            else
            ev++;
        }
        if(od>0 && ev>0)
        {
            cout<<2<<endl;
        }else
        {
            int ans=2;
            map<int,int> mp;
            while(true)
            {
                int ct=0;
                for(int j=0;j<n;j++)
                {
                    int nus=a[j]%ans;
                    if(mp[nus]==0)
                    {
                        mp[nus]=1;
                        ct++;
                    }
                }
                if(ct==2)
                {
                    break;
                }else
                ans*=2;

                mp.clear();
            }
            cout<<ans<<endl;
        }
    }

    return 0;
}