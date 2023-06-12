package com.java.level.one;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class ReportResult {
	public static void main(String[] args) {
		String[] id_list = { "muzi", "frodo", "apeach", "neo" };
		String[] report = { "muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi" };
		int k = 2;

		int[] answer = solution(id_list, report, k);
		
		System.out.println("" + answer[0] + answer[1] + answer[2]);
	}

	private static int[] solution(String[] id_list, String[] report, int k) {
		/*
		 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템
		 -각 유저는 한 번에 한 명의 유저를 신고함. 
		 -횟수의 제한은 없지만 동일 유저에 대한 신고 횟수는 1회로 처리됨.
		 -k번 이상 신고된 유저는 정지되며, 해당 유저를 신고한 모든 유저에게 메일이 발송됨.
		 
		 설계
		 1. report 배열에서 중복되는 요소 제거
		 	> HashSet 객체 생성
		 	> 향상된 for문으로 report 반복
			 	> if String을 포함하는 요소가 set내에 없는지?
			 		> set에 추가함.
		 2. 유저가 몇 번 신고되었는지 횟수 계산
		 	> HashMap 객체 생성
		 	> 향상된 for문으로 set 반복
		 		> String을 공백을 기준으로 배열화함.
		 		> if list의 1번째 요소를 key로 하는 값이 있는지?
		 			> 있으면 기존 value + 1
		 			> 없으면 value는 0
		 		> if value가 k 이상인지?
		 			> String 배열 block에 key를 추가함.
		 3. 유저가 신고한 결과 반환
		 	> for문으로 id_list 반복
		 		> if list에서 해당 아이디로 시작하는 요소가 있는지?
		 			> 그 요소의 마지막이 block id로 끝나는지?
		 				> answer의 i 번째 요소 ++
		 */
		
		ArrayList<String> reportList = new ArrayList<String>(report.length);
		report = Arrays.stream(report).distinct().toArray(String[]::new);
		
		Set<String> blockSet = new HashSet<String>(id_list.length);
		HashMap<String, Integer> map = new HashMap<String, Integer>(report.length);
		int[] answer = new int[id_list.length];
		
		
		for(String temp : report) {
			reportList.add(temp);
		}
		
		for(String temp : report) {
			String[] tmp = temp.split(" ");
			if(map.containsKey(tmp[1])) {
				map.put(tmp[1], map.get(tmp[1]) + 1);
			} else {
				map.put(tmp[1], 1);
			}
		}
		
		Set<String> set = map.keySet();
		
		for(String key : set) {
			if(map.get(key) >= k) {
				blockSet.add(key);
			}
		}
		
		for(int i=0; i<id_list.length; i++) {
			Iterator<String> blockIter = blockSet.iterator();
			String temp = "";
			
			while(blockIter.hasNext()) {
				temp = id_list[i] + " " + blockIter.next();
				if(reportList.contains(temp)) {
					answer[i]++;
				}
			}
		}
		
		return answer;
	}

}
