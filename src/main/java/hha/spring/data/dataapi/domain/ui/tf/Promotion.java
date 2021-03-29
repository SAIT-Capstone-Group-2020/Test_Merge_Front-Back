package hha.spring.data.dataapi.domain.ui.tf;


import java.util.List;

public class Promotion {

  private Integer eventId;
  private String description;
  private String bannerImageUrl;

  private List<PromotionProduct> products;

  public Integer getEventId() {
    return eventId;
  }

  public void setEventId(Integer eventId) {
    this.eventId = eventId;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getBannerImageUrl() {
    return bannerImageUrl;
  }

  public void setBannerImageUrl(String bannerImageUrl) {
    this.bannerImageUrl = bannerImageUrl;
  }

  public List<PromotionProduct> getProducts() {
    return products;
  }

  public void setProducts(List<PromotionProduct> products) {
    this.products = products;
  }

  public Promotion() {
  }

  public Promotion(Integer eventId, String description, String bannerImageUrl, List<PromotionProduct> products) {
    this.eventId = eventId;
    this.description = description;
    this.bannerImageUrl = bannerImageUrl;
    this.products = products;
  }

  @Override
  public String toString() {
    return "CurrentPromotion{" +
            "eventId=" + eventId +
            ", description='" + description + '\'' +
            ", bannerImageUrl='" + bannerImageUrl + '\'' +
            ", products=" + products +
            '}';
  }
}
