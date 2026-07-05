'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  clergyData,
  servicesData,
  saintGroupsData,
  sermonsData,
  announcementsData,
  eventsData,
  ClergyProfile,
  ServiceSchedule,
  SaintGroup,
  Sermon,
  Announcement,
  ChurchEvent
} from '../utils/data';

interface AnalyticsData {
  pageViews: number;
  sermonDownloads: number;
  formSubmissions: number;
  whatsappClicks: number;
}

interface DataContextType {
  clergy: ClergyProfile[];
  services: ServiceSchedule[];
  groups: SaintGroup[];
  sermons: Sermon[];
  announcements: Announcement[];
  events: ChurchEvent[];
  analytics: AnalyticsData;
  isDarkMode: boolean;
  
  // Update methods (CMS Actions)
  updateClergy: (profile: ClergyProfile) => void;
  updateService: (service: ServiceSchedule) => void;
  updateGroup: (group: SaintGroup) => void;
  addSermon: (sermon: Omit<Sermon, 'id'>) => void;
  updateSermon: (sermon: Sermon) => void;
  deleteSermon: (id: string) => void;
  addAnnouncement: (announcement: Omit<Announcement, 'id'>) => void;
  updateAnnouncement: (announcement: Announcement) => void;
  deleteAnnouncement: (id: string) => void;
  addEvent: (event: Omit<ChurchEvent, 'id'>) => void;
  updateEvent: (event: ChurchEvent) => void;
  deleteEvent: (id: string) => void;
  
  // Track metrics
  trackMetric: (metric: keyof AnalyticsData) => void;
  toggleDarkMode: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clergy, setClergy] = useState<ClergyProfile[]>([]);
  const [services, setServices] = useState<ServiceSchedule[]>([]);
  const [groups, setGroups] = useState<SaintGroup[]>([]);
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 1240,
    sermonDownloads: 145,
    formSubmissions: 34,
    whatsappClicks: 78
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Initialize and load from local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedClergy = localStorage.getItem('cathedral_clergy');
      const storedServices = localStorage.getItem('cathedral_services');
      const storedGroups = localStorage.getItem('cathedral_groups');
      const storedSermons = localStorage.getItem('cathedral_sermons');
      const storedAnnouncements = localStorage.getItem('cathedral_announcements');
      const storedEvents = localStorage.getItem('cathedral_events');
      const storedAnalytics = localStorage.getItem('cathedral_analytics');
      const storedDarkMode = localStorage.getItem('cathedral_dark_mode');

      setClergy(storedClergy ? JSON.parse(storedClergy) : clergyData);
      setServices(storedServices ? JSON.parse(storedServices) : servicesData);
      setGroups(storedGroups ? JSON.parse(storedGroups) : saintGroupsData);
      setSermons(storedSermons ? JSON.parse(storedSermons) : sermonsData);
      setAnnouncements(storedAnnouncements ? JSON.parse(storedAnnouncements) : announcementsData);
      setEvents(storedEvents ? JSON.parse(storedEvents) : eventsData);
      
      if (storedAnalytics) setAnalytics(JSON.parse(storedAnalytics));
      if (storedDarkMode) {
        const isDark = JSON.parse(storedDarkMode);
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
      }
      
      setIsLoaded(true);
      
      // Auto-increment page views on load
      const currentAnalytics = storedAnalytics ? JSON.parse(storedAnalytics) : {
        pageViews: 1240,
        sermonDownloads: 145,
        formSubmissions: 34,
        whatsappClicks: 78
      };
      const updatedAnalytics = { ...currentAnalytics, pageViews: currentAnalytics.pageViews + 1 };
      setAnalytics(updatedAnalytics);
      localStorage.setItem('cathedral_analytics', JSON.stringify(updatedAnalytics));
    }
  }, []);

  // Save changes helper
  const saveToStorage = (key: string, data: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  // CMS update handlers
  const updateClergy = (profile: ClergyProfile) => {
    const updated = clergy.map(item => item.id === profile.id ? profile : item);
    setClergy(updated);
    saveToStorage('cathedral_clergy', updated);
  };

  const updateService = (service: ServiceSchedule) => {
    const updated = services.map(item => item.id === service.id ? service : item);
    setServices(updated);
    saveToStorage('cathedral_services', updated);
  };

  const updateGroup = (updatedGroup: SaintGroup) => {
    const updated = groups.map(item => item.id === updatedGroup.id ? updatedGroup : item);
    setGroups(updated);
    saveToStorage('cathedral_groups', updated);
  };

  const addSermon = (newSermon: Omit<Sermon, 'id'>) => {
    const sermon: Sermon = {
      ...newSermon,
      id: `sermon-${Date.now()}`
    };
    const updated = [sermon, ...sermons];
    setSermons(updated);
    saveToStorage('cathedral_sermons', updated);
  };

  const updateSermon = (updatedSermon: Sermon) => {
    const updated = sermons.map(item => item.id === updatedSermon.id ? updatedSermon : item);
    setSermons(updated);
    saveToStorage('cathedral_sermons', updated);
  };

  const deleteSermon = (id: string) => {
    const updated = sermons.filter(item => item.id !== id);
    setSermons(updated);
    saveToStorage('cathedral_sermons', updated);
  };

  const addAnnouncement = (newAnnouncement: Omit<Announcement, 'id'>) => {
    const announcement: Announcement = {
      ...newAnnouncement,
      id: `announce-${Date.now()}`
    };
    const updated = [announcement, ...announcements];
    setAnnouncements(updated);
    saveToStorage('cathedral_announcements', updated);
  };

  const updateAnnouncement = (updatedAnnouncement: Announcement) => {
    const updated = announcements.map(item => item.id === updatedAnnouncement.id ? updatedAnnouncement : item);
    setAnnouncements(updated);
    saveToStorage('cathedral_announcements', updated);
  };

  const deleteAnnouncement = (id: string) => {
    const updated = announcements.filter(item => item.id !== id);
    setAnnouncements(updated);
    saveToStorage('cathedral_announcements', updated);
  };

  const addEvent = (newEvent: Omit<ChurchEvent, 'id'>) => {
    const event: ChurchEvent = {
      ...newEvent,
      id: `event-${Date.now()}`
    };
    const updated = [...events, event];
    setEvents(updated);
    saveToStorage('cathedral_events', updated);
  };

  const updateEvent = (updatedEvent: ChurchEvent) => {
    const updated = events.map(item => item.id === updatedEvent.id ? updatedEvent : item);
    setEvents(updated);
    saveToStorage('cathedral_events', updated);
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter(item => item.id !== id);
    setEvents(updated);
    saveToStorage('cathedral_events', updated);
  };

  const trackMetric = (metric: keyof AnalyticsData) => {
    const updated = { ...analytics, [metric]: analytics[metric] + 1 };
    setAnalytics(updated);
    saveToStorage('cathedral_analytics', updated);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', newMode);
      saveToStorage('cathedral_dark_mode', newMode);
    }
  };

  return (
    <DataContext.Provider value={{
      clergy: isLoaded ? clergy : clergyData,
      services: isLoaded ? services : servicesData,
      groups: isLoaded ? groups : saintGroupsData,
      sermons: isLoaded ? sermons : sermonsData,
      announcements: isLoaded ? announcements : announcementsData,
      events: isLoaded ? events : eventsData,
      analytics,
      isDarkMode,
      updateClergy,
      updateService,
      updateGroup,
      addSermon,
      updateSermon,
      deleteSermon,
      addAnnouncement,
      updateAnnouncement,
      deleteAnnouncement,
      addEvent,
      updateEvent,
      deleteEvent,
      trackMetric,
      toggleDarkMode
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
