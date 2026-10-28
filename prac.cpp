class Solution {
public: 
    const long long N=1e9+7;
    struct Compare{
        bool operator()(const vector<long long>& a,const vector<long long>& b)
        {
            return a[0]>b[0];
        }
    };
    int countPaths(int n, vector<vector<int>>& roads) {
        vector<pair<long long,long long>> g[n];
        for(long long j=0;j<roads.size();j++)
        {
            long long num1=roads[j][0];
            long long num2=roads[j][1];
            long long num3=roads[j][2];
            g[num2].push_back({num1,num3});
            g[num1].push_back({num2,num3});
        }
        priority_queue<pair<long long,long long> , vector<pair<long long,long long>>, greater<pair<long long,long long>>> pq;
        pq.push({0,0});
        vector<long long> time(n,long long_MAX);
        time[0]=0;
        long long ct=0;
        vector<long long> ways(n,0);
        ways[0]=1;
        while(!pq.empty())
        {
            pair<long long,long long> num=pq.top();
            pq.pop();
            long long num1=num.first;
            long long num2=num.second;
            if(num1>time[num2])
            continue;
            for(auto [child,dist] : g[num2])
            {
                if(time[child]>(num1+dist+1LL))
                {
                    ways[child]=ways[num2];
                    time[child]=num1+dist;
                    pq.push({time[child],child});
                    if(child==(n-1))
                    ct=1;
                }else if(time[child]==(num1+dist))
                {
                   ways[child]=(ways[child]+ways[num2])%N;
                }
            }
        }
        int answ=ways[n-1]%N;
        return answ;
    }
};