package step03.no15552;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
//		설계>
//		1. BufferedReader 사용
//		2. testCase int로 입력 받음
//		3. for문
//			>testCase의 갯수만큼 A+B를 입력 받고 출력함.
		BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
		int testCase = Integer.parseInt(reader.readLine());
		StringTokenizer st;
		
		for(int i=0; i<testCase; i++) {
			st = new StringTokenizer(reader.readLine(), " ");
			writer.write((Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken())) + "\n");
		}
		reader.close();
		
		writer.flush();
		writer.close();
		
	}

}
