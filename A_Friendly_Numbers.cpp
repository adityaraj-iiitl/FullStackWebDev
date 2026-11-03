  int32_t n=coins.size();
      vector<vector<int32_t>> dp(amount+1,vector< int32_t>(n+1,0));
      for(int32_t j=0;j<=n;j++)
      {
        dp[0][j]=1;
      }
      for(int32_t j=1;j<=amount;j++)
      {
        for(int32_t i=1;i<=n;i++)
        {
            if((j-coins[i-1])>=0)
            {
                dp[j][i]=dp[j][i-1]+dp[j-coins[i-1]][i];
            }else
            {
               dp[j][i]=dp[j][i-1];
            }
        }
      }
      return dp[amount][n];