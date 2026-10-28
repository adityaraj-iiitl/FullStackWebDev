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
        int n,x;
        cin>>n>>x;
        vector<int> a(n);
        for(int j=0;j<n;j++)
        {
            cin>>a[j];
        }
        sort(a.begin(),a.end());
        priority_queue<int> pq;
        if(n==2)
        {
            int num=a[1]-a[0];
            pq.push(num);
             while(x--)
             {
                num=pq.top();
                pq.pop();
                if(num%2!=0)
                {
                    num++;
                    num/=2;
                    pq.push(num);
                    pq.push(num-1);
                }else
                {
                    num/=2;
                    pq.push(num);
                    pq.push(num);
                }
             }
             int ans=pq.top();
             cout<<ans<<endl;
        }else
        {
            pq.push(a[1]-a[0]);
            pq.push(a[n-1]-a[n-2]);
            for(int j=2;j<(n-2);j++)
            {
               
                int diff=min(a[j]-a[j-1],a[j+1]-a[j]);
                pq.push(diff);
            }
            while(x--)
            {
                int num=pq.top();
                pq.pop();
                if(num%2!=0)
                {
                    num++;
                    num/=2;
                    pq.push(num);
                    pq.push(num-1);
                }else
                {
                    num/=2;
                    pq.push(num);
                    pq.push(num);
                }
            }
            int ans=pq.top();
            cout<<ans<<endl;
        }
    }

    return 0;
}

class Solution {
public:
    int removeStones(vector<vector<int>>& stones) {
        int n=INT_MIN;
        for(int j=0;j<stones.size();j++)
        {
            int num1=stones[j][0];
            int num2=stones[j][1];
            n=max(n,num1);
            n=max(n,num2);
        }
        vector<int> col(n+1,0);
        vector<int> row(n+1,0);
        for(int j=0;j<stones.size();j++)
        {
            int num1=stones[j][0];
            int num2=stones[j][1];
            row[num1]++;
            col[num2]++;
        }
        int ct=0;
         for(int j=0;j<stones.size();j++)
        {
            int num1=stones[j][0];
            int num2=stones[j][1];
            if(row[num1]>0 || col[num2]>0)
            {
                ct++;
                row[num1]--;
                col[num2]--;
            }
        }
        return ct;
    }
};