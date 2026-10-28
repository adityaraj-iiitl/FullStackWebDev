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
        string s;
        cin>>s;
        vector<int> a;
        for(int j=0;j<s.size();j++)
        {
            string str="";
            str+=s[j];
            j++;
            while(s[j]!='+')
            {
                str+=s[j];
                j++;
            }

        }
    }

    return 0;
}