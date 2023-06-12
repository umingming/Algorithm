package com.java.step07.no11654;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		/*
		주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
		
		설계>
		1. BufferedReader
		2. 글자 read로 입력
		3. 출력
		 */
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		int input = reader.read();
		
		System.out.println(input);
	}
}
