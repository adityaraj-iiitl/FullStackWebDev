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

        int ans=0;
        for(int j=0;j<n;j++)
        {
            if(a[j]<=(j+1))
            ans++;
        }
        cout<<ans<<endl;
    }

    return 0;
}