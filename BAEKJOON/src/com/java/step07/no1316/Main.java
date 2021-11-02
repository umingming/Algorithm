package com.java.step07.no1316;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Set;

public class Main {
	
	public static void main(String[] args) throws IOException {
		/*
		그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
		- 각 문자가 연속해서 나타나는 경우만 그룹 단어
		
		설계>
		1. Scanner
		2. HashMap
		3. 단어의 개수 입력 받음
		4. for문 단어의 개수
			> 단어 입력 받음
				>for 단어의 길이
					>if문 i와 i+1번째 글자가 같은지?
						>substring으로 i제외하고 합치기, i--
				>for 단어의 길이
					>HashMap key로 알파벳 넣음. 
		5. Map.stream 
			>값이 1인 거만 카운트
			
		 */
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		int num = Integer.parseInt(reader.readLine());
		int cnt = num;
		
		for(int i=0; i<num; i++) {
			String word = reader.readLine();
			for(int j=1; j<word.length(); j++) {
				if(word.indexOf(word.charAt(j - 1)) > word.indexOf(word.charAt(j))) {
					cnt --;
					break;
				}
			}
		}
		
//		for(int i=0; i<num; i++) {
//			HashMap<Character, Integer> map = new HashMap<Character, Integer>();
//			boolean flag = false;
//			String word = reader.readLine();
//			
//			for(int j=0; j<word.length()-1; j++) {
//				if(word.charAt(j) == word.charAt(j+1)) {
//					word = word.substring(0, j) + word.substring(j+1);
//					j--;
//				}
//			}
//			
//			for(int j=0; j<word.length(); j++) {
//				if(map.containsKey(word.charAt(j))) {
//					map.put(word.charAt(j), map.get(word.charAt(j))+1);
//				} else {
//					map.put(word.charAt(j), 1);
//				}
//			}
//			
//			Set<Character> set = map.keySet();
//			
//			for(Character c : set) {
//				if(map.get(c) > 1) {
//					flag = true;
//				}
//			}
//			if(flag) count--;
//		}
		
//		System.out.println(cnt);
	}
}
