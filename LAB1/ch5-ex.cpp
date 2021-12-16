#include <stdio.h>
#include <string.h>
int main(){
    char s[] = "Hello";
    char t[] = "World";
    char *z = new char;
    printf("%d\n",strlen(s) + strlen(t));
    strncpy(z, t+1, 3);
    printf("%s\n",z);
    strncpy(z,s+strlen(s)/2,2);
    printf("%S\n,z");
    return(0);
}