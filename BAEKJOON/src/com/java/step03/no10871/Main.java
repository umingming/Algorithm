package com.java.step03.no10871;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		정수 N개로 이루어진 수열 A와 정수 X가 주어졌을 때 A에서 X보다 작은 수를 모두 출력하시오.
		
		설계>
		1. Scanner
		2. N, X 입력
		3. lownum 변수 선언
		4. for문 N 반복
			>num 입력
			>if문(num<X) lownum+=num
		5. lownum 출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int x = scan.nextInt();
		String lowNum = "";
		
		for(int i=0; i<n; i++) {
			int num = scan.nextInt();
			if(num < x) {
				lowNum += num + " ";
			}
		}
		
		System.out.println(lowNum);
	}
}
