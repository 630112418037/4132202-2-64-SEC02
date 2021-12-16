#include <stdio.h>
#include <string.h>
int main(){
    int num;
    printf("Please enter an intrger between 1000 and 999999:");
    scanf("%d", &num);
    printf("%3d,%-3d\n", num/1000, num%1000);
    return(0);
}