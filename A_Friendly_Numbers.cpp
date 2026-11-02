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
        int len=0;
        int num=n;
        while(num>0)
        {
            int nus=num%10;
            num/=10;
            len++;
        }
        
        int maxi=n+((len+1)*9);
        int ans=0;
        for(int j=n+1;j<=maxi;j++)
        {
            int sum=0;
            int num=j;
            while(num>0)
            {
                sum+=num%10;
                num/=10;
            }
            if((j-sum)==(n))
            ans++;
        }
        cout<<ans<<endl;
    }

    return 0;
}