package com.java.step03.no2741;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		자연수 N이 주어졌을 때 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
		
		설계>
		1. Scanner
		2. 자연수 입력
		3. for문 N 반복 >i출력
		 */
		
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		
		for(int i=1; i<=num; i++) {
			System.out.println(i);
		}
		
	}

}
