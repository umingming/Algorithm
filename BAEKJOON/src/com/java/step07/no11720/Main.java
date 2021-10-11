package com.java.step07.no11720;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		/*
		N개의 숫자가 공백 없이 쓰여지고 이 숫자를 모두 합해서 출력하는 프로그램 작성.
		-첫째 줄에 숫자의 개수가 주어짐
		
		설계>
		1. BufferedReader
		2. 숫자의 개수 입력
		3. sum 변수 선언 후 0으로 초기화
		4. for문 숫자 반복
			>read()메소드로 int형 변수에 저장함
			>변수를 sum에 추가함
		5. sum 출력 
		 */
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		int testCase = Integer.parseInt(reader.readLine());
		int sum = 0;
		
		for(int i=0; i<testCase; i++) {
			int num = reader.read() - '0';
			sum += num;
		}
		
		System.out.println(sum);
	}
}
