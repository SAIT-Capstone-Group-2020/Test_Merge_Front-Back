package hha.spring.data.dataapi.service;


import hha.spring.data.dataapi.domain.ui.CurrentHolidayBanner;
import hha.spring.data.dataapi.domain.ui.CurrentHomeBanner;
import hha.spring.data.dataapi.domain.ui.CurrentPromotion;
import hha.spring.data.dataapi.domain.ui.tf.Promotion;
import hha.spring.data.dataapi.domain.ui.tf.TfCurrHoliday;
import hha.spring.data.dataapi.domain.ui.tf.TfCurrHomeBanner;
import hha.spring.data.dataapi.mapper.PromotionMapper;
import hha.spring.data.dataapi.repository.HomeBannerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BannerService {
    private HomeBannerRepository homeBannerRepository;
    private PromotionMapper promotionMapper;
    public BannerService(HomeBannerRepository homeBannerRepository, PromotionMapper promotionMapper) {
        this.homeBannerRepository = homeBannerRepository;
        this.promotionMapper = promotionMapper;
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public List<CurrentHomeBanner> findCurrentHomeBanner() {
        return homeBannerRepository.queryCurrentHomeBanner();
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public List<CurrentPromotion> findCurrentPromotion() {
        return homeBannerRepository.queryCurrentPromotion();
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public CurrentHolidayBanner findCurrentHolidayBanner() {
        return homeBannerRepository.queryCurrentHolidayBanner();
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public TfCurrHoliday findTFCurrentHolidayBanner() {
        return homeBannerRepository.queryTFCurrentHolidayBanner();
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public List<TfCurrHomeBanner> findTFCurrentHomeBanner() {
        return homeBannerRepository.queryTFCurrentHomeBanner();
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public Promotion findCurrentPromotionTf2(){
        return promotionMapper.currentWeeklyPromotion();
    }


}

