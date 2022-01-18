package com.java.step08.no2869;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {
		/*
		달팽이가 나무 막대를 올라가는데 걸리는 시간 구하기
		나무 막대: Vm, 달팽이가 오르는 거리: Am, 미끄러지는 거리: Bm
		-정상에 올라간 후에는 미끄러지지 않음.
		
		1. Scanner
		2. 입력 받은 숫자를 A, B, V에 차례대로 초기화
		3. day, height 변수 생성
		4. while문; 높이가 v를 초과할 때까지 반복
			>day++, height += A
				>if height가 v보다 크거나 같은지?
					>break ㄱㄱ
				>height -= B
		 */
		
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		
		String[] tmp = reader.readLine().split(" ");
		int A = Integer.parseInt(tmp[0]);
		int B = Integer.parseInt(tmp[1]);
		int V = Integer.parseInt(tmp[2]);
		
		int day = 0;
		int height = 0;
		
		while(true) {
			day++;
			height += A;
			if(height >= V) {
				break;
			}
			height -= B;
		}
		
		System.out.println(day);
		
	}

}
