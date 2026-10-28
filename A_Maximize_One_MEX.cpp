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

        
        vector<int> b;
        for(int j=0;j<=(n-k);j++)
        {
            b.push_back(a[j]);
        }
        sort(b.begin(),b.end());
        int mex=0;
        for(int j=0;j<b.size();j++)
        {
            if(b[j]==mex)
            {
                mex++;
            }else if(b[j]>mex)
            {
                break;
            }
        }
        int ind=-1;
        for(int j=(n-k+1);j<n;j++)
        {
            if(a[j]==mex)
            {
                ind=j;
                break;
            }
        }
        if(ind==-1)
        cout<<-1<<endl;
        else
        {
            int ind2=-1;
            int num2=mex;
            for(int j=0;j<=(n-k);j++)
            {
               vector<int> c(n-k+1);
               for(int i=0;i<=(n-k);i++)
               c[i]=a[i];

               c[j]=mex;
               int mexi=0;
               sort(c.begin(),c.end());
               for(int j=0;j<c.size();j++)
               {
                if(c[j]==mexi)
                mexi++;
                else if(c[j]>mexi)
                break;
               }
               if(mexi>=num2)
               {
                num2=mexi;
                ind2=j;
               }
            }
            if(ind2==-1)
            cout<<-1<<endl;
            else
            cout<<ind2+1<<" "<<ind+1<<endl;
        }
    }

    return 0;
}