package com.java.step07.no10809;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		/*
		알파벳 소문자로 이루어진 단어의 위치를 출력하는 프로그램 작성
		-첫 번째 글자의 위치는 0
		-포함되지 않을 경우 -1
		
		설계>
		1. BufferedReader
		2. readLine메소드로 문자열 입력
		3. for문 a부터 z까지
			>indexOf사용해서 문자의 위치 출력
		 */
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		String word = reader.readLine();
		
		for(char i='a'; i<='z'; i++) {
			System.out.print(word.indexOf(i) + " ");
		}
	}
}
