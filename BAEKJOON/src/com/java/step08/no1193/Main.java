package com.java.step08.no1193;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		/*
		x번째 분수를 구하는 프로그램을 작성하시오.
		-1/1 -> 1/2 -> 2/1 ...
		
		설계
		1. BufferedReader
		2. 숫자 입력
		3. n, m, num 변수 선언 후 1로 초기화
		4. while문 num < input 
			-if문 조건별
		5. 결과 출력
		 */
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		int n = 1;
		int m = 1;
		int num = 1;
		int input = Integer.parseInt(reader.readLine());
		
		while(num < input) {
			if (n == 1 && m % 2 != 0) {
				m++;
			} else if(m == 1 && n % 2 == 0) {
				n++;
			} else if((n + m) % 2 == 0) {
				n--;
				m++;
			} else if((n + m) % 2 != 0) {
				n++;
				m--;
			}
			num++;
		}
		
		System.out.printf("%d/%d", n, m);
	}

}
