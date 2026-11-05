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
        string s;
        cin>>s;
        string ans="";
        for(int j=0;j<26;j++)
        {
            char c='a'+j;
            bool b=false;
            for(int j=0;j<s.size();j++)
            {
                if(s[j]==c)
                {
                    b=true;
                    break;
                }
            }
            if(!b)
            {
                ans=c;
                break;
            }
        }
        if(ans!="")
        cout<<ans<<endl;
        if(ans=="")
        {
        for(int m=0;m<26;m++)
        {
            for(int i=0;i<26;i++)
            {
                string str="";
                str+='a'+m;
                str+=('a'+i);
                
                bool b=false;
                for(int j=0;j<s.size()-1;j++)
                {
                    string str2="";
                    str2+=s[j];
                    str2+=s[j+1];
                    if(str2==str)
                    {
                        b=true;
                        break;
                    }
                }
              
                if(b==0)
                {
                    ans=str;
                    break;
                }
            }
            if(ans!="")
            break;
        }
        if(ans!="")
        cout<<ans<<endl;
    }
        if(ans=="")
        {
        for(int m=0;m<26;m++)
        {
            for(int i=0;i<26;i++)
            {
                for(int k=0;k<26;k++)
                {
                    string str="";
                    str+='a'+m;
                    str+='a'+i;
                    str+='a'+k;
                    bool b=false;
                    for(int j=0;j<s.size()-2;j++)
                    {
                        string st2="";
                        st2+=s[j];
                        st2+=s[j+1];
                        st2+=s[j+2];
                        if(str==st2)
                        {
                            b=true;
                            break;
                        }
                    }
                    if(!b)
                    {
                        ans=str;
                        break;
                    }
                }
                if(ans!="")
                break;
            }
            if(ans!="")
            break;
        }
        cout<<ans<<endl;
    }
    }

    return 0;
}