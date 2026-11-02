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

        sort(a.begin(),a.end());
        bool check=false;
        for(int j=0;j<n;j++)
        {
            int lo=j+1;
            int hi=n-1;
            while(lo<=hi)
            {
                int mid=(hi+lo)/2;
                int diff=a[mid]-a[j];
                if(diff>k)
                {
                    hi=mid-1;
                }else if(diff<k)
                {
                    lo=mid+1;
                }else
                {
                    check=true;
                    break;
                }
            }
            if(check)
            break;
        }
        if(check)
          cout<<"YES"<<endl;
        else
          cout<<"NO"<<endl;
    }

    return 0;
}