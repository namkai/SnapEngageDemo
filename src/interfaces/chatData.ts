
export interface TranscriptData {
  id?: string;
  date: number;
  alias: string;
  message: string;
}

export interface ChatData {
  id: string;
  type: string;
  requested_by: string;
  initial_message: string;
  chat_duration: number;
  ip_address: string;
  page_url: string;
  created_at: number;
  latitude: number;
  longitude: number;
  survey_score: number;
  transcript: TranscriptData[];
}