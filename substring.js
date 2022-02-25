function printLcs(X,Y,m,n)
{
  //console.log(typeof(X)+" " +typeof(Y)+" "+typeof(m)+ " "+typeof(n));
  
   //var L=[[m+1][n+1]];
   const L = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
  
   for (var i=0; i<=m; i++)
   {
     for (var j=0; j<=n; j++)
     {
       if (i === 0 || j === 0)
         L[i][j] = 0;
       else if (X[i-1] === Y[j-1])
         L[i][j] = L[i-1][j-1] + 1;
       else
         L[i][j] = Math.max((L[i-1][j]), (L[i][j-1]));
     }
   }

   //console.log(L);
  
   //var index = L[m][n];
   var lcs = [];
  
   var s = m, d = n;
   while (s > 0 && d > 0)
   {
     //console.log(X[s-1] +" : "+Y[d-1]);
      if (X[s-1] === Y[d-1])
      {
          lcs.push(X[s-1]); 
          s--; 
          d--;     
      }
      else if (L[s-1][d] > L[s][d-1])
         s--;
      else
         d--;
   }
   console.log("LCS is: " + lcs.join(""));
}

module.exports={printLcs};
