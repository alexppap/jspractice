function match(s, pattern,i=0,j=0)
{
   if(i>s.length&&j>pattern.length){
        //都清空了
        return true;
    }if(i<s.length&&j>pattern.length){
        //没清空，但是匹配符清空了
        return false;
    }
    //看后一位是否有*
    if(pattern[j+1]!='*'){
        if(s[i]==pattern[j]||(s[i]&&pattern[j]==".")){
            return match(s,pattern,++i,++j);
        }else{
            return false
        }
    }else{
        //有*
        if(s[i]==pattern[j]||(s[i]&&pattern[j]=='.')){
            //如果字符匹配
            // 用当前字符匹配*后的字符 或者用当前规则匹配前一个字符
            return match(s, pattern,i,j+2)||match(s,pattern,i+1,j)
        }else{
            //字符不匹配
            // 用当前字符匹配*后的字符
            return match(s,pattern,i,j+2)
        }
    }
}